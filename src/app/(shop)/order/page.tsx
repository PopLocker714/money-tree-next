import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Доставка",
  description: "Условия доставки",
};

export default async function Order() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-medium mb-7">Условия доставки</h1>
      <Image src="/order.jpg" alt="order" width={500} height={300} />
      <h2 className="text-2xl font-medium mb-3">Доставка по России</h2>
      <p className="mb-1">
        Доставку в пределах Центрального федерального округа и в другие регионы
        нашей страны осуществляют почта России и транспортные компании – их мы
        выбираем по договоренности с покупателем. Оплата транспортной компании
        производится заказчиком. Стоимость доставки крупногабаритных растений,
        доставки в МО, ЦФО и другие регионы России рассчитывается в
        индивидуальном порядке. Подробную информацию о стоимости и способах
        доставки растений вы можете уточнить при оформлении заказа. Сайт
        автоматически рассчитает для вас стоимость доставки и посоветуют
        оптимальный вариант. Отправка в регионы осуществляется при 100%
        предоплате.
      </p>
      <p className="mb-1">
        Стоимость доставки и примерные сроки рассчитываются онлайн во время
        оформления заказа, для этого просто выберите свой город и увидите все
        доступные способы доставки и оплаты.
      </p>
      <p className="mb-1">
        Обратите пожалуйста внимание что в указанные сроки доставки не входят
        день сборки и отправки заказа.
      </p>

      <p className="mb-4">
        Доставляем почтой России или транспортной компанией. Указывая адрес и
        способ доставки Вы соглашатесь с тем, что доставка будет осуществлена
        либо до почтового отделения, либо до ПВЗ ТК.
      </p>

      <h2 className="text-2xl font-medium mb-3">Доставка до ПВЗ</h2>
      <p className="mb-4">
        Один из наиболее экономичных способов при котором можно предусмотреть
        забор заказа недалеко от дома, работы это доставка до ПВЗ. При
        оформлении заказа, укажите адрес. В день поступления заказа в ПВЗ Вы
        получите смс-уведомление.
      </p>

      <h2 className="text-2xl font-medium mb-3">Почтой России</h2>
      <p className="mb-4">
        До ближайшего почтового отделения.Удобный и надежный способ доставки.
        После отправки, у вас будет трек-номер для отслеживания посылки.
      </p>

      <h2 className="text-2xl font-medium mb-3">СРОКИ ДОСТАВКИ</h2>
      <p className="mb-1">
        Мы постоянно улучшаем нашу логистику, чтобы вам не пришлось долго ждать
        свою покупку.
      </p>
      <p className="mb-4">
        3-4 рабочих дня - это примерное время доставки посылки от момента
        отгрузки товара в транспортную компанию или почту РФ. Дальнейшая
        доставка зависит от работы почты или транспортной компании.
      </p>
    </section>
  );
}
