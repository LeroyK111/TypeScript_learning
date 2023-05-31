
type ErrorCode = 'E001' | 'E002' | 'E003';


/**
 * @author Leroy
 * 对于键值对来说，映射更有意思
*/
type ErrorMessages = Record<ErrorCode, string>;

const errorMessages: ErrorMessages = {
  E001: 'An error occurred.',
  E002: 'Another error occurred.',
  E003: 'Yet another error occurred.'
};


const errorMessage = errorMessages['E001']; // 'An error occurred.'

