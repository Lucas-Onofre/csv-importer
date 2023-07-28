type BaseErrorProps = {
  message?: string | undefined
  key?: string | undefined
  action?: string | undefined
  statusCode: number
}

export class BaseError extends Error {
  public message: string
  public key: string
  public action: string
  public statusCode: number

  constructor({ message, key, action, statusCode }: BaseErrorProps) {
    super(message)

    this.message = message || 'An error occurred'
    this.key = key || 'unknown_error'
    this.action = action || 'Try again later...'
    this.statusCode = statusCode || 400
  }
}

export class InternalServerError extends BaseError {
  constructor(message: string, action: string) {
    super({
      message: message || 'An internal server error occurred',
      key: 'internal_server_error',
      action: action || 'Try again later...',
      statusCode: 500,
    })
  }
}

export class BadRequestError extends BaseError {
  constructor(message: string, action?: string) {
    super({
      message: message || 'You sent a malformed request',
      key: 'bad_request',
      action: action || 'Check if the request is well formed and try again',
      statusCode: 400,
    })
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string, action: string) {
    super({
      message: message || 'You tried to access a resource that does not exist',
      key: 'not_found',
      action: action || 'Check if the resource exists and try again',
      statusCode: 404,
    })
  }
}
