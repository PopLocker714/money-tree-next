import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Оплата",
  description: "Условия оплаты",
};

export default async function Payment() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-medium mb-7">Условия Оплаты</h1>
      <Image
        className="mb-4"
        src="/payment.jpg"
        alt="order"
        width={500}
        height={300}
      />

      <p className="mb-3">
        Оплатить заказ можно онлайн на сайте при оформлении заказа.
      </p>

      <p className="mb-4">
        Заказ можно оплатить онлайн на сайте с помощью банковской карты либо по
        реквизитам сформированного счета. При онлайн-оплате очередность
        обработки вашего заказа выше, так как ваша очередь на отгрузку товаров
        становится выше.
      </p>

      <h2 className="text-2xl font-medium mb-3">
        Онлайн-оплата с банковской карты или электронные платежи
      </h2>

      <h3 className="text-xl mb-2">Для онлайн оплаты</h3>

      <p className="mb-3">
        Для оформления покупки положите ее&nbsp;&laquo;в&nbsp;корзину&raquo;
        и&nbsp;выберите способ оплаты.
      </p>

      <p className="mb-3">
        При выборе опции &laquo;Оплатить банковской картой&raquo; платеж
        проходит через АО &laquo;Т-Банк&raquo;. Реквизиты вашей карты
        вы&nbsp;вводите в&nbsp;форму платежного шлюза АО &laquo;Т-Банк&raquo;.
        Информация о&nbsp;вашей карте передается в&nbsp;защищенном режиме с
        использованием протокола шифрования SSL.
      </p>

      <p className="mb-3">
        Если требуется ввод специального пароля, значит ваш банк использует
        систему безопасного проведения интернет-платежей Verified By Visa,
        MasterCard SecureCode, MIR Accept, J-Secure.
      </p>

      <p className="mb-3">
        Защиту персональных данных обеспечивает АО&nbsp;&laquo;Т-Банк&raquo;.
        Политика неразглашения гарантирует конфиденциальность данных вашей
        карты, за исключением законодательно установленных случаев.
      </p>

      <h2 className="text-2xl font-medium mb-3">
        Получатель средств (продавец)
      </h2>

      <p className="mb-1">ИП МАЛОФЕЕВА ТАТЬЯНА ПЕТРОВНА</p>

      <p className="mb-4">
        <strong>ИНН:</strong> 710505169043
      </p>

      <h3 className="text-xl mb-2">Банковские счета</h3>
      <p className="mb-1">
        <strong>Расчётный счёт:</strong> 40802810601500451949 Банк получателя
        ООО &laquo;Банк Точка&raquo;
      </p>
      <p className="mb-1">
        <strong>БИК:</strong> 044525104
      </p>
      <p className="mb-4">
        <strong>Корреспондентский счёт:</strong> 30101810745374525104
      </p>

      <h3 className="text-xl mb-2">Юридический адрес</h3>
      <p className="mb-4">
        142200 Московская область, г.Серпухов, ул.Ворошилова, 128
      </p>
    </section>
  );
}
