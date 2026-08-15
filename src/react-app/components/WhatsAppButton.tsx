const WHATSAPP_NUMBER = "919999665479";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello SGSC, I have a product enquiry.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-[#22c55e] hover:bg-[#1fae52] text-white flex items-center justify-center shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.2c1.9 1 3.9 1.5 4.7 1.5 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.7c.2 0 .5-.1.8.6l1.1 2.7c.1.2.2.4 0 .7l-.4.7-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.2.9-.1l1.3-1.6c.3-.4.6-.3.9-.2l2.7 1.3c.4.2.7.3.8.5.1.1.1.9-.2 1.7z" />
      </svg>
    </a>
  );
}
