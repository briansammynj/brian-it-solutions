import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Brian, I found your website and would like to enquire about your IT services."
  );

  return (
    <a
      href={`https://wa.me/254711437854?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Chat with Brian on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;