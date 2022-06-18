<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST["Имя"];
$phone = $_POST["Телефон"];
$product = $_POST["Продукт"];

$title = "Заявка на товар $product";
$file = $_FILES['file'];


$c = true;
// Формирование самого письма
$body = "
    <tr>
      <th>Имя: </th>
      <th>Телефон: </th>
      <th>Товар: </th>
    </tr>
    <tr style='background-color: #f8f8f8;'>  
      <td style='padding: 10px; border: #e9e9e9 1px solid; text-align: center;'><b>$name</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid; text-align: center;'>$phone</td>
      <td style='padding: 10px; border: #e9e9e9 1px solid; text-align: center;'>$product</td>
    </tr>
";

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'danilrumyancev2@gmail.com'; // Логин на почте
  $mail->Password   = 'mckx ogyp mzif akhq'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('danil@dtvgroup.kz', 'Заявка на товар'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('danil@dtvgroup.kz');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();
} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}