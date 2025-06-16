// Promise Method Wrapper

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
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
