/**
 * The set of Firebase Functions status codes. The codes are the same at the
 * ones exposed by gRPC here:
 * https://github.com/grpc/grpc/blob/master/doc/statuscodes.md
 *
 * Possible values:
 * - 'cancelled': The operation was cancelled (typically by the caller).
 * - 'unknown': Unknown error or an error from a different error domain.
 * - 'invalid-argument': Client specified an invalid argument. Note that this
 *   differs from 'failed-precondition'. 'invalid-argument' indicates
 *   arguments that are problematic regardless of the state of the system
 *   (e.g. an invalid field name).
 * - 'deadline-exceeded': Deadline expired before operation could complete.
 *   For operations that change the state of the system, this error may be
 *   returned even if the operation has completed successfully. For example,
 *   a successful response from a server could have been delayed long enough
 *   for the deadline to expire.
 * - 'not-found': Some requested document was not found.
 * - 'already-exists': Some document that we attempted to create already
 *   exists.
 * - 'permission-denied': The caller does not have permission to execute the
 *   specified operation.
 * - 'resource-exhausted': Some resource has been exhausted, perhaps a
 *   per-user quota, or perhaps the entire file system is out of space.
 * - 'failed-precondition': Operation was rejected because the system is not
 *   in a state required for the operation's execution.
 * - 'aborted': The operation was aborted, typically due to a concurrency
 *   issue like transaction aborts, etc.
 * - 'out-of-range': Operation was attempted past the valid range.
 * - 'unimplemented': Operation is not implemented or not supported/enabled.
 * - 'internal': Internal errors. Means some invariants expected by
 *   underlying system has been broken. If you see one of these errors,
 *   something is very broken.
 * - 'unavailable': The service is currently unavailable. This is most likely
 *   a transient condition and may be corrected by retrying with a backoff.
 * - 'data-loss': Unrecoverable data loss or corruption.
 * - 'unauthenticated': The request does not have valid authentication
 *   credentials for the operation.
 */
export type FunctionsErrorCode =
  | 'ok'
  | 'cancelled'
  | 'unknown'
  | 'invalid-argument'
  | 'deadline-exceeded'
  | 'not-found'
  | 'already-exists'
  | 'permission-denied'
  | 'resource-exhausted'
  | 'failed-precondition'
  | 'aborted'
  | 'out-of-range'
  | 'unimplemented'
  | 'internal'
  | 'unavailable'
  | 'data-loss'
  | 'unauthenticated';

/** @hidden */
export type CanonicalErrorCodeName =
  | 'OK'
  | 'CANCELLED'
  | 'UNKNOWN'
  | 'INVALID_ARGUMENT'
  | 'DEADLINE_EXCEEDED'
  | 'NOT_FOUND'
  | 'ALREADY_EXISTS'
  | 'PERMISSION_DENIED'
  | 'UNAUTHENTICATED'
  | 'RESOURCE_EXHAUSTED'
  | 'FAILED_PRECONDITION'
  | 'ABORTED'
  | 'OUT_OF_RANGE'
  | 'UNIMPLEMENTED'
  | 'INTERNAL'
  | 'UNAVAILABLE'
  | 'DATA_LOSS';

interface HttpErrorCode {
  canonicalName: CanonicalErrorCodeName;
  status: number;
}
/**
 * Standard error codes and HTTP statuses for different ways a request can fail,
 * as defined by:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * This map is used primarily to convert from a client error code string to
 * to the HTTP format error code string and status, and make sure it's in the
 * supported set.
 */
const errorCodeMap: { [name in FunctionsErrorCode]: HttpErrorCode } = {
  'ok': { canonicalName: 'OK', status: 200 },
  'cancelled': { canonicalName: 'CANCELLED', status: 499 },
  'unknown': { canonicalName: 'UNKNOWN', status: 500 },
  'invalid-argument': { canonicalName: 'INVALID_ARGUMENT', status: 400 },
  'deadline-exceeded': { canonicalName: 'DEADLINE_EXCEEDED', status: 504 },
  'not-found': { canonicalName: 'NOT_FOUND', status: 404 },
  'already-exists': { canonicalName: 'ALREADY_EXISTS', status: 409 },
  'permission-denied': { canonicalName: 'PERMISSION_DENIED', status: 403 },
  'unauthenticated': { canonicalName: 'UNAUTHENTICATED', status: 401 },
  'resource-exhausted': { canonicalName: 'RESOURCE_EXHAUSTED', status: 429 },
  'failed-precondition': { canonicalName: 'FAILED_PRECONDITION', status: 400 },
  'aborted': { canonicalName: 'ABORTED', status: 409 },
  'out-of-range': { canonicalName: 'OUT_OF_RANGE', status: 400 },
  'unimplemented': { canonicalName: 'UNIMPLEMENTED', status: 501 },
  'internal': { canonicalName: 'INTERNAL', status: 500 },
  'unavailable': { canonicalName: 'UNAVAILABLE', status: 503 },
  'data-loss': { canonicalName: 'DATA_LOSS', status: 500 },
};

/** @hidden */
interface HttpErrorWireFormat {
  details?: unknown;
  message: string;
  status: CanonicalErrorCodeName;
}

/**
 * An explicit error that can be thrown from a handler to send an error to the
 * client that called the function.
 */
export class HttpsError extends Error {
  /**
   * A standard error code that will be returned to the client. This also
   * determines the HTTP status code of the response, as defined in code.proto.
   */
  public readonly code: FunctionsErrorCode;

  /**
   * Extra data to be converted to JSON and included in the error response.
   */
  public readonly details: unknown;

  /**
   * A wire format representation of a provided error code.
   *
   * @hidden
   */
  public readonly httpErrorCode: HttpErrorCode;

  constructor(code: FunctionsErrorCode, message: string, details?: unknown) {
    super(message);

    // A sanity check for non-TypeScript consumers.
    if (code in errorCodeMap === false) {
      throw new Error(`Unknown error code: ${code}.`);
    }

    this.code = code;
    this.details = details;
    this.httpErrorCode = errorCodeMap[code];
  }

  public toJSON(): HttpErrorWireFormat {
    const {
      details,
      httpErrorCode: { canonicalName: status },
      message,
    } = this;

    return {
      ...(details === undefined ? {} : { details }),
      message,
      status,
    };
  }
}
