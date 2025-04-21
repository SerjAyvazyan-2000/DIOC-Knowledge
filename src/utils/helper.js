export const validateFeedbackData = (data) => {
  const errors = [];
  if (!data.fullname || data.fullname.trim().length < 5) {
    errors.push({
      field: "fullname",
      message: "Full name must be at least 5 characters long",
    });
  }

  if (!data.phoneNumber) {
    errors.push({
      field: "phoneNumber",
      message: "Телефон обязателен",
    });
  }

  if (!data.email) {
    errors.push({
      field: "email",
      message: "Требуется адрес электронной почты",
    });
  }

  if (!data.message || data.message.trim().length > 1000) {
    errors.push({
      field: "message",
      message: "Максимальная длина — 1000 символов.",
    });
  }

  if (data.privacyPolicyConsent !== true) {
    errors.push({
      field: "privacyPolicyConsent",
      message: "Требуется согласие с политикой конфиденциальности",
    });
  }

  if (errors.length > 0) {
    throw {
      name: "ValidationError",
      status: 400,
      message: "Неверные данные",
      details: { errors },
    };
  }
};

export const formatDate = (dateString) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};
