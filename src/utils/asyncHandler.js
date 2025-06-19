// Promise Method Wrapper

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      // Change err.code to err.statusCode
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error', // Added fallback for message too
      });
    });
  };
};

export { asyncHandler };

// const asyncHandler = () => {};
// const asyncHandler = (fn) => () => {};
// const asyncHandler = (fn) => async () => {}
// ============================================================================

// this is try catch method Wrapper

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// ============================================================================
