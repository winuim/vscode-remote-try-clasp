const greeter = (person: string) => {
    return `Hello, ${person}!`;
};

export function testGreeter(): string {
    const user = "Grant";
    const ret = greeter(user);
    console.log({ ret });
    return ret;
}
