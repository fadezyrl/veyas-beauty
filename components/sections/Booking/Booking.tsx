"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type JSX,
} from "react";
import { SERVICES } from "@/data/services";
import { TIME_SLOTS } from "@/data/times";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import {
  BOOK_SERVICE_EVENT,
  getServiceIdFromLocation,
  type BookServiceDetail,
} from "@/lib/booking-deeplink";
import "./booking.desktop.css";
import "./booking.mobile.css";

const STEP_COUNT = 5;

const isValidServiceId = (value: string | null): value is string => {
  return Boolean(value && SERVICES.some((service) => service.id === value));
};

export const Booking = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { booking } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;

  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [timeId, setTimeId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [hintMessage, setHintMessage] = useState("");
  const minDate = useSyncExternalStore(
    () => () => undefined,
    () => new Date().toISOString().slice(0, 10),
    () => "",
  );

  useEffect(() => {
    const applyService = (value: string | null): void => {
      if (!isValidServiceId(value)) {
        return;
      }
      setServiceId(value);
      setStep(0);
      setHintMessage("");
    };

    const onBookService = (event: Event): void => {
      const custom = event as CustomEvent<BookServiceDetail>;
      applyService(custom.detail?.serviceId ?? null);
    };

    const onPopState = (): void => {
      applyService(getServiceIdFromLocation());
    };

    const frame = window.requestAnimationFrame(() => {
      applyService(getServiceIdFromLocation());
    });

    window.addEventListener(BOOK_SERVICE_EVENT, onBookService);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(BOOK_SERVICE_EVENT, onBookService);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const selectedService = SERVICES.find((item) => item.id === serviceId);
  const selectedTime = TIME_SLOTS.find((item) => item.id === timeId);

  const serviceName = selectedService
    ? resolvePath(dictRecord, selectedService.nameKey)
    : "";
  const timeLabel = selectedTime
    ? resolvePath(dictRecord, selectedTime.labelKey)
    : "";

  const canContinue = (): boolean => {
    if (step === 0) return Boolean(serviceId);
    if (step === 1) return Boolean(date);
    if (step === 2) return Boolean(timeId);
    if (step === 3) return Boolean(name.trim() && contact.trim());
    return true;
  };

  const buildMessage = (): string => {
    const noteLine = notes.trim()
      ? `\n${booking.messageNotes}: ${notes.trim()}`
      : "";
    return `${booking.messageGreeting}\n${booking.messageService}: ${serviceName}\n${booking.messageDate}: ${date}\n${booking.messageTime}: ${timeLabel}\n${booking.messageName}: ${name.trim()}\n${booking.messageContact}: ${contact.trim()}${noteLine}`;
  };

  const goNext = (): void => {
    if (!canContinue()) {
      setHintMessage(booking.continueHint);
      return;
    }
    setHintMessage("");
    setStep((current) => Math.min(current + 1, STEP_COUNT - 1));
  };

  const goBack = (): void => {
    setHintMessage("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const onSend = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      setStatusMessage(booking.copied);
    } catch {
      setStatusMessage(booking.copyFallback);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <section className="book" id="book">
      <div className="book__intro">
        <p className="lbl">{booking.label}</p>
        <h2>
          {booking.titleBefore}
          <em>{booking.titleEm}</em>
        </h2>
        <p>{booking.body}</p>
      </div>

      <form className="book__form" onSubmit={onSubmit} noValidate>
        <div className="book__steps" aria-hidden="true">
          {Array.from({ length: STEP_COUNT }).map((_, index) => (
            <i key={index} className={index <= step ? "is-on" : ""} />
          ))}
        </div>

        <div
          className={`book__panel${step === 0 ? " is-on" : ""}`}
          aria-hidden={step !== 0}
          inert={step !== 0 ? true : undefined}
        >
          <h3>{booking.steps.service}</h3>
          {SERVICES.map((service) => (
            <label key={service.id} className="book__opt">
              <input
                type="radio"
                name="service"
                value={service.id}
                checked={serviceId === service.id}
                onChange={() => {
                  setServiceId(service.id);
                  setHintMessage("");
                }}
                tabIndex={step === 0 ? 0 : -1}
              />
              <span>{resolvePath(dictRecord, service.nameKey)}</span>
              <span className="lbl">{service.duration}</span>
            </label>
          ))}
        </div>

        <div
          className={`book__panel${step === 1 ? " is-on" : ""}`}
          aria-hidden={step !== 1}
          inert={step !== 1 ? true : undefined}
        >
          <h3>{booking.steps.date}</h3>
          <label className="book__field">
            <span className="lbl">{booking.dateLabel}</span>
            <input
              type="date"
              value={date}
              min={minDate}
              onChange={(event) => {
                setDate(event.target.value);
                setHintMessage("");
              }}
              tabIndex={step === 1 ? 0 : -1}
            />
          </label>
          <p className="book__note">{booking.dateNote}</p>
        </div>

        <div
          className={`book__panel${step === 2 ? " is-on" : ""}`}
          aria-hidden={step !== 2}
          inert={step !== 2 ? true : undefined}
        >
          <h3>{booking.steps.time}</h3>
          {TIME_SLOTS.map((slot) => (
            <label key={slot.id} className="book__opt">
              <input
                type="radio"
                name="time"
                value={slot.id}
                checked={timeId === slot.id}
                onChange={() => {
                  setTimeId(slot.id);
                  setHintMessage("");
                }}
                tabIndex={step === 2 ? 0 : -1}
              />
              <span>{resolvePath(dictRecord, slot.labelKey)}</span>
            </label>
          ))}
        </div>

        <div
          className={`book__panel${step === 3 ? " is-on" : ""}`}
          aria-hidden={step !== 3}
          inert={step !== 3 ? true : undefined}
        >
          <h3>{booking.steps.details}</h3>
          <label className="book__field">
            <span className="lbl">{booking.name}</span>
            <input
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setHintMessage("");
              }}
              tabIndex={step === 3 ? 0 : -1}
            />
          </label>
          <label className="book__field">
            <span className="lbl">{booking.contact}</span>
            <input
              type="text"
              autoComplete="email"
              inputMode="email"
              value={contact}
              onChange={(event) => {
                setContact(event.target.value);
                setHintMessage("");
              }}
              tabIndex={step === 3 ? 0 : -1}
            />
          </label>
          <label className="book__field">
            <span className="lbl">{booking.notes}</span>
            <textarea
              rows={2}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              tabIndex={step === 3 ? 0 : -1}
            />
          </label>
        </div>

        <div
          className={`book__panel${step === 4 ? " is-on" : ""}`}
          aria-hidden={step !== 4}
          inert={step !== 4 ? true : undefined}
        >
          <h3>{booking.steps.review}</h3>
          <pre className="book__summary">{buildMessage()}</pre>
          <a
            className="btn"
            href={SITE.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={step === 4 ? 0 : -1}
            onClick={() => {
              void onSend();
            }}
          >
            {booking.send}
          </a>
          {statusMessage ? (
            <p className="book__note" role="status">
              {statusMessage}
            </p>
          ) : null}
        </div>

        {hintMessage ? (
          <p className="book__hint" id="book-hint" role="status">
            {hintMessage}
          </p>
        ) : null}

        <div className="book__nav">
          <button
            type="button"
            className="book__back"
            onClick={goBack}
            style={{ visibility: step === 0 ? "hidden" : "visible" }}
          >
            {booking.back}
          </button>
          {step < STEP_COUNT - 1 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!canContinue()}
              aria-describedby={hintMessage ? "book-hint" : undefined}
            >
              {booking.continue}
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
};
