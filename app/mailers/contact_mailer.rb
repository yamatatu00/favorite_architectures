class ContactMailer < ApplicationMailer

  def send_mail(contact)
    @contact = contact
    mail to: @contact.email,
    subject: 'お問い合わせありがとうございます。'
  end

  def contact_mail(contact)
    @contact = contact  
    mail to: ENV['GMAIL_USER_NAME'], 
    subject: "お問い合わせ通知"
  end
end
