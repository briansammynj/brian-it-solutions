import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Brian, I found your website and would like to enquire about your IT services."
  );

  const whatsappUrl = `https://wa.me/254711437854?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with Brian on WhatsApp"
      title="Chat with Brian on WhatsApp"
    >
      <MessageCircle size={22} aria-hidden="true" />

      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;