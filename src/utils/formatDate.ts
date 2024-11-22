export const formattedDate = (date: string | Date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    return formattedDate;
};
