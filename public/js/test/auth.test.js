import { crearCuenta, iniciarSesion } from '../helper/auth.helper.js'; 

async function test(name, fn) {
    try {
        await fn();
        console.log(`✅ ${name}`);
    } catch (err) {
        console.error(`❌ ${name}`);
        console.error(err.message);
    }
}

await test("TEST: Crear cuenta exitosamente", async () => {
    const correo = "emanuel.castro@uabc.edu.mx";
    const password = "12345678";

    const status = await crearCuenta(correo, password);

    if (!(status === 0)) throw new Error();
});

await test("TEST: Iniciar sesión exitosamente", async () => {
    const correo = "emanuel.castro@uabc.edu.mx";
    const password = "12345678";

    const status = await iniciarSesion(correo, password);

    if (!(status === 0)) throw new Error();
});

await test("TEST: Bloqueo tras 3 inentos", async () => {
    const correo = "emanuel.castro@uabc.edu.mx";
    const password_incorrecta = "1234567X";

    if ((await iniciarSesion(correo, password_incorrecta)) === 2) throw new Error();
    if ((await iniciarSesion(correo, password_incorrecta)) === 2) throw new Error();
    if ((await iniciarSesion(correo, password_incorrecta)) !== 2) throw new Error();
});