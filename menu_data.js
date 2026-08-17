const familyData = {
    adults: 4,
    teenager: 1,
    child: 1
};

const weeklyMenu = [
    {
        day: "Lunes",
        meals: {
            desayuno: { item: "Arepa con queso y chocolate", cost: 12000, prep: "Comprar queso fresco y chocolate" },
            almuerzo: { item: "Bandeja paisa", cost: 45000, prep: "Remojar frijoles la noche anterior" },
            comida: { item: "Sopa de verduras", cost: 15000, prep: "Comprar verduras frescas" }
        }
    },
    {
        day: "Martes",
        meals: {
            desayuno: { item: "Huevos pericos y café", cost: 10000, prep: "Verificar huevos en nevera" },
            almuerzo: { item: "Pollo sudado con arroz", cost: 35000, prep: "Descongelar pollo" },
            comida: { item: "Ensalada de frutas", cost: 12000, prep: "Comprar frutas variadas" }
        }
    }
];

function getPrepNotification(dayIndex) {
    const nextDay = (dayIndex + 1) % weeklyMenu.length;
    return weeklyMenu[nextDay].meals;
}