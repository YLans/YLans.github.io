<?php 
require_once('./phpmailer/PHPMailer.php');
require_once('./phpmailer/Exeption.php');
require_once('./phpmailer/SMTP.php');
$firstName = $_POST['firstName'];
$firstEmail = $_POST['email'];
$firstPhone = $_POST['userPhone'];
$name = $_POST['name'];
$email = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = 'utf-8';
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.mail.ru';
    //настройки почты
    $mail->Username = 'yana_lanshchikova@mail.ru';
    $mail->Password = '*Wk8T.su/KTs8Lp';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('yana_lanshchikova@mail.ru'); // от кого будет уходить письмо?
    $mail->addAddress('YLansS@yandex.ru');// Кому будет уходить письмо 
    //письмо
    $mail->isHTML(true);
    $mail->Subject = 'Заявка с сайта 23Degree';
    if ($firstName) {
        $mail->Body    = 'Пользователь ' .$firstName . ' оставил заявку<br>Телефон: ' .$firstPhone. '<br>Почта: ' .$firstEmail . '<br>Верхняя форма';
    } else if ($name) {
        $mail->Body    = 'Пользователь ' .$name . ' оставил заявку<br>Телефон: ' .$phone. '<br>Почта: ' .$email . '<br>Сообщение: ' .$message;
    }
    if($mail->send()) {
        echo 'success';
    } else {
        echo 'Неверные настройки почты';
    }
} catch (Exception $ex) {
    echo 'Заявка не была отправлена. Ошибка: {$mail->ErrorInfo}';
}
?>