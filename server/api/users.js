export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const secret = config.private.secret;

  try {
    const data = [
      {
        "id": 1,
        "country": "Bangladesh",
        "name": "Dhaka"
      },
      {
        "id": 2,
        "country": "Japan",
        "name": "Tokyo"
      },
      {
        "id": 3,
        "country": "United Kingdom",
        "name": "London"
      },
    ];
    return {
      status: 200,
      message: 'City List fetched successfully',
      data,
      secret
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || 'Internal Server Error',
      data: [],
      secret
    };
  }
});
