export class AbsoluteNumber {
    // Sử dụng câu lệnh throw new Error("Unsupported Operation Exception");
    // để đánh dấu rằng phương thức này chưa hoàn thiện.
    public static findAbsolute(num: number): number {
        // throw new Error("Unsupported Operation Exception");
        if(num < 0)
            return  -num;
        return num;
    }
}