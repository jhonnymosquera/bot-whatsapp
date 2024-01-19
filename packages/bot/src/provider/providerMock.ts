import { ProviderClass } from './providerClass'

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

type EventName = string
type PayloadType = any

class ProviderMock extends ProviderClass {
    delaySendMessage = async (milliseconds: number, eventName: EventName, payload: PayloadType): Promise<void> => {
        await delay(milliseconds)
        this.emit(eventName, payload)
    }

    sendMessage = async (userId: string, message: string): Promise<any> => {
        return Promise.resolve({ userId, message })
    }
}

export { ProviderMock }