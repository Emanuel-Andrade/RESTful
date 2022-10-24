import nodemailer from 'nodemailer';

interface ISendMail {
  to: string;
  body: string;
}

class EtherealMail {
  async send({ to, body }: ISendMail): Promise<void> {
    const account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    const message = await transporter.sendMail({
      from: 'time@apivendas.com',
      to,
      subject: 'Recuperação de Senha',
      text: body,
    });

    console.log('message sent: %s', message.messageId);
    console.log('preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new EtherealMail();
