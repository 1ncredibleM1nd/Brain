export function getInitials(name: string) {
  let initials = name
    .replace(/([A-ZА-Я])/g, " $1")
    .replace(/\p{Emoji}/gu, "")
    .trim();

  if (!initials.length) {
    initials = "NaN";
  }

  return initials.toLowerCase();
}
