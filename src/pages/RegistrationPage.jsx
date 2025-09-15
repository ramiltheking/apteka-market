import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/RegistrationPage.css";

export function RegistrationPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    phone: "",
    password: "",
    code: "",
    firstName: "",
    lastName: "",
  });
  const [success, setSuccess] = useState(false);

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
            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={form.password}
              onChange={handleChange}
            />

            <button onClick={nextStep}>Продолжить</button>
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
        >
          <h2>Подтверждение</h2>
          <input
            type="text"
            name="code"
            placeholder="Код из SMS"
            value={form.code}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Назад</button>
          <button onClick={nextStep}>Далее</button>
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
