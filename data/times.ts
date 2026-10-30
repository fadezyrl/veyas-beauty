export type TimeSlot = {
  id: string;
  labelKey: string;
};

export const TIME_SLOTS: TimeSlot[] = [
  { id: "morning", labelKey: "booking.times.morning" },
  { id: "afternoon", labelKey: "booking.times.afternoon" },
  { id: "evening", labelKey: "booking.times.evening" },
];
