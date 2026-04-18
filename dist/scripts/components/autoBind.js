export function autoBind(target, methodName, descriptor) {
    const method = descriptor.value;
    const createDescriptor = {
        configurable: true,
        get() {
            return method.bind(this);
        },
    };
    return createDescriptor;
}
//# sourceMappingURL=autoBind.js.map