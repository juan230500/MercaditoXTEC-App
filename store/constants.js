export const COLORS = {
  white: "#fff",
  black: "#222831",
  grey: "#ccc",
  lightGrey: "#eee",
  primary: "#364F6B",
  accent: "#FF495C",
};

export const FONT_SIZES = {
  small: 12,
  medium: 20,
  big: 32,
};

export const PRODUCT_TYPES = {
  product: {
    name: { display: "Nombre", value: "", required: true },
    description: { display: "Descripción", value: "", required: true },
    price: { display: "Precio", value: "", required: true, number: true },
    category: {
      display: "Categoría",
      value: "",
      options: [
        { label: "calificacion1", value: "c1" },
        { label: "calificacion2", value: "c2" },
      ],
    },
    deliveryInfo: {
      display: "Información para entregar",
      value: "",
      required: true,
    },
    paymentInfo: {
      display: "Información para recibir pago",
      value: "",
      required: true,
    },
  },
  service: {
    name: { display: "Nombre", value: "", required: true },
    description: { display: "Descripción", value: "", required: true },
    price: { display: "Precio", value: "", required: true, number: true },
    deliveryInfo: {
      display: "Información para entregar",
      value: "",
      required: true,
    },
    paymentInfo: {
      display: "Información para recibir pago",
      value: "",
      required: true,
    },
  },
  practice: {
    curse: { display: "Curso", value: "", required: true },
    price: { display: "Precio", value: "", required: true, number: true },
    topics: { display: "Temas", value: "", required: true },
    paymentInfo: {
      display: "Información para recibir pago",
      value: "",
      required: true,
    },
  },
  tutorial: {
    curse: { display: "Curso", value: "", required: true },
    topics: { display: "Temas fuertes", value: "", required: true },
    score: {
      display: "Nota del curso",
      value: "",
      required: true,
      number: true,
    },
    schedule: { display: "Horarios", value: "", required: true },
  },
};

export const BASE_URL = "http://0a21918660e3.ngrok.io";
