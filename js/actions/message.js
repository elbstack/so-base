export const MESSAGE_SEND = 'MESSAGE_SEND'

export function sendMessage(message) {
  const messageMeta = {
    uniqueId: Date.now()
  }

  const fullMessage = Object.assign({}, message, messageMeta)

  return {
      type: MESSAGE_SEND,
      message: fullMessage
    }
}
