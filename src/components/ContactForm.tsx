"use client";

import { FiSend } from "react-icons/fi";

// ponytail: no backend. The form opens the visitor's email app with the message filled in.
// Swap for Formspree / an API route if you want messages without an email app.
export default function ContactForm({ email }: { email: string }) {
  return (
    <form
      className="card space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const subject = `Portfolio message from ${f.get("name")}`;
        const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input name="name" required autoComplete="name" placeholder="Your name" className="field mt-2" />
        </label>
        <label className="block text-sm font-medium">
          Your email
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="field mt-2" />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Message
        <textarea name="message" required rows={5} placeholder="Tell me about your project or idea" className="field mt-2 resize-y" />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        <FiSend /> Send Message
      </button>
      <p className="text-xs text-muted">This opens your email app with the message ready to send.</p>
    </form>
  );
}
