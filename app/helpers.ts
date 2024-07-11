export const normalizeDate = (date: string, type: number) => {
    const [year, month, day] = date.split('-');

    switch(type){
        case 1: return `${month}/${day}/${year}`;
        case 2: return `${month}/${day}`;
    }
};