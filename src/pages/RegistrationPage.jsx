import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/RegistrationPage.css";

export function RegistrationPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    phone: "",
    password: "",
    passwordD: "",
    code: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState({ type: "error", value: "" });
  const [success, setSuccess] = useState(false);

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Отправка формы:", form);
    setSuccess(true);
    nextStep();
  };

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  function ResendCode(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function PINEntry({ length } = { length: 4 }) {
    const [value, setValue] = useState("");
    const inputRef = useRef();

    const onCellClick = (i) => {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(i, i + 1);
    };

    const onValueUpdate = (newValue) => {
      setValue(newValue);
      // setForm((prev) => ({ ...prev, code: newValue }));
      let i = inputRef?.current.selectionStart;
      inputRef?.current.setSelectionRange(i, i + 1);
    };

    return (
      <div>
        <div className="pins">
          {[...Array(length)].map((x, i) => (
            <div className="pin" onClick={(e) => onCellClick(i)} key={i}>
              {/* {form.code[i] ? form.code[i] : ""} */}
              {value[i] ? value[i] : ""}
            </div>
          ))}
        </div>
        <input
          className="pin-inp"
          style={{ width: "0px", height: "0px", opacity: 0, border: "none" }}
          ref={inputRef}
          maxLength={6}
          // value={form.code}
          value={value}
          onChange={(e) => onValueUpdate(e.target.value)}
        />
      </div>
    );
  }

  useEffect(() => {
    if (
      form.password.length !== 0 &&
      (form.password.length < 8 || form.passwordD.length < 8)
    )
      setError({ type: "error", value: "Пароль меньше 8 символов" });
    else if (form.password !== form.passwordD)
      setError({ type: "error", value: "Пароли не совпадают" });
    else if (
      form.password === form.passwordD &&
      (form.password || form.passwordD !== "")
    )
      setError({ type: "success", value: "Высокая надежность" });
    else return;
  }, [form.password, form.passwordD]);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^0-9+]/g, ""); // Оставляем только цифры и "+"

    if (!value.startsWith("+7")) value = "+7"; // Всегда начинаем с +7
    if (value.length > 12) value = value.slice(0, 12); // Ограничение длины

    setForm((prev) => ({ ...prev, phone: value }));

    // Проверяем, правильный ли формат
    const phoneRegex = /^\+7\d{10}$/;
    setError({
      type: "error",
      value: phoneRegex.test(value) ? "" : "Введите корректный номер",
    });
  };

  return (
    // <div className="registration">
    <AnimatePresence mode="wait">
      {step === 1 && (
        <motion.div
          key="step1"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          style={{ height: "100%" }}
        >
          <div className="register-nav">
            <button className="reg-back" onClick={() => navigate(-1)}>
              <img src="/icons/back-reg.svg" alt="back-reg" />
              Назад
            </button>
            <h2>Регистрация</h2>
          </div>

          <div className="register-container">
            <section className="form-label">
              <label htmlFor="phone">
                <p>НОМЕР ТЕЛЕФОНА</p>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+7 777 777 77 77"
                  value={form.phone}
                  onChange={(e) => handlePhoneChange(e)}
                  required
                />
              </label>
              <p className="desc-label">
                Введите номер телефона, и мы позаботимся о быстрой доставке
                ваших препаратов.
              </p>
            </section>
            <section className="form-label">
              <label htmlFor="password" className="password-label">
                <p>ПАРОЛЬ</p>
                <div>
                  <input
                    id="password"
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Пароль"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <button onClick={() => setShow((prev) => !prev)}>
                    <img src="/icons/pass-vis.svg" alt="pass-vis" />
                  </button>
                </div>
                <input
                  id="passwordD"
                  type={show ? "text" : "password"}
                  name="passwordD"
                  placeholder="Пароль"
                  value={form.passwordD}
                  onChange={handleChange}
                  required
                />
              </label>
              <p className={error.type === "error" ? "error" : "success"}>
                {error.value}
              </p>
              <p className="desc-label">
                Пароль должен содержать не менее 8 символов, включать буквы и
                цифры. Для большей защиты рекомендуется добавить заглавные буквы
                и специальные знаки.
              </p>
            </section>

            <section className="sec-next">
              <button
                onClick={nextStep}
                disabled={
                  !(
                    form.phone &&
                    form.password &&
                    form.passwordD !== "" &&
                    error.type !== "error"
                  )
                }
              >
                Получить код
              </button>
              <p className="desc-label">
                Нажимая «Получить код», вы соглашаетесь с{" "}
                <a href="/">Лицензионным соглашением</a> и{" "}
                <a href="/">Политикой конфиденциальности</a>
              </p>
            </section>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="step2"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          style={{ height: "100%" }}
        >
          <div className="register-nav">
            <button className="reg-back" onClick={prevStep}>
              <img src="/icons/back-reg.svg" alt="back-reg" />
              Назад
            </button>
            <h2>Код подтверждения</h2>
          </div>

          <div className="register-container">
            <section className="form-label">
              <label htmlFor="code">
                <p>
                  Мы отправили 6-значный код подтверждения на {form.phone},{" "}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      prevStep();
                    }}
                  >
                    Изменить
                  </a>
                </p>
                {/* <input
                  id="code"
                  type="text"
                  name="code"
                  placeholder="123456"
                  value={form.code}
                  onChange={(e) => setForm((prev) => ({ ...prev, code: e.target.value }))}
                  required
                  maxLength="6"
                /> */}
                <PINEntry length={6} />
              </label>
              <p className="desc-label">
                <a href="/" onClick={(e) => ResendCode(e)}>
                  Отправить код повторно
                </a>
              </p>
            </section>

            <section className="sec-next">
              <button
                onClick={nextStep}
                disabled={
                  !(
                    form.code !== "" &&
                    error.type !== "error" &&
                    form.code.length === 6
                  )
                }
              >
                Продолжить
              </button>
            </section>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          key="step3"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          <h2>Личная информация</h2>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={form.lastName}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Назад</button>
          <button onClick={handleSubmit}>Завершить</button>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div
          key="step4"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          {success ? (
            <h2>✅ Регистрация прошла успешно!</h2>
          ) : (
            <h2>❌ Ошибка регистрации</h2>
          )}
        </motion.div>
      )}
    </AnimatePresence>
    // </div>
  );
}
