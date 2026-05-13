import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="section-container" id="contact">
      <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-[3rem] p-8 md:p-16 border border-accent/20 shadow-2xl relative overflow-hidden group">
        {/* Animated background element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>

        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-display font-black leading-tight">Let&apos;s <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">Connect</span></h2>
              <p className="text-slate-400 leading-relaxed font-semibold text-lg max-w-md">
                Always open for new opportunities and creative collaborations. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "kishorech36@gmail.com" },
                { icon: <MapPin size={18} />, label: "Location", value: "KPHB HYDERABED " },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="p-4 bg-accent/10 text-accent rounded-2xl group-hover/item:bg-accent group-hover/item:text-deep-bg transition-all shadow-inner border border-accent/20">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="text-lg font-black group-hover/item:text-accent transition-colors">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-deep-bg/60 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-inner backdrop-blur-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2 px-1">
                  <Mail size={12} className="text-accent" />
                  Your Email
                </label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-accent/50 transition-all font-semibold placeholder:text-slate-600 shadow-inner"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2 px-1">
                  <Send size={12} className="text-accent" />
                  Project Vision
                </label>
                <textarea 
                  rows={4}
                  placeholder="Describe your idea briefly..."
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-accent/50 transition-all font-semibold placeholder:text-slate-600 resize-none shadow-inner"
                ></textarea>
              </div>

              <button className="w-full bg-accent hover:bg-accent/80 text-deep-bg font-black py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(45,212,191,0.2)] uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 active:scale-95 group/submit">
                Submit Strategy
                <Send size={14} className="group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
