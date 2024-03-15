export const extraBuilder = (
    actions: any,
    array: string[],
    type: string[],
    builder: Record<string, any>
) => {
    for (const i in array) {
        const name = array[i]
        builder
            .addCase(actions[name].pending, (state: Record<string, any>) => {
                state[name].loading = true
                state[name].success = false
                state[name].error = null
            })
            .addCase(
                actions[name].fulfilled,
                (state: Record<string, any>, action: any) => {
                    state[name].loading = false
                    state[name].result =
                        type[i] === 'list' ||
                        type[i] === 'listAll' ||
                        type[i] === ''
                            ? action.payload.data
                            : action.payload
                    state[name].success = true
                    state[name].error = null
                }
            )
            .addCase(
                actions[name].rejected,
                (state: Record<string, any>, action: any) => {
                    state[name].loading = false
                    state[name].error = action.error
                }
            )
    }
}
