import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const products = [
  { name: "Mango Pickle", price: "₹240", img: "🥭" },
  { name: "Lemon Pickle", price: "₹180", img: "🍋" },
  { name: "Mixed Pickle", price: "₹320", img: "🥒" },
  { name: "Chilli Pickle", price: "₹220", img: "🌶️" },
];

export default function Project03Visual({ compact = false }: { compact?: boolean }) {
  const scale = compact ? 0.9 : 1;
  const [stage] = useStageCycle();

  return (
    <div className="relative h-full w-full overflow-hidden p-4 md:p-6">
      {/* Reflection */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
      />

      <div className="relative h-full" style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/40" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            Pickle Store · E-Commerce
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-medium text-[#D2D2D7]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            MONGODB
          </div>
        </div>

        {/* App navigation */}
        <div className="mt-4 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
          <div className="font-display text-sm font-semibold tracking-tight text-white">
            pickle.store
          </div>
          <div className="hidden items-center gap-4 text-[10px] font-medium text-[#86868B] md:flex">
            <span>Home</span>
            <span>Shop</span>
            <span>Cart</span>
            <span>Account</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5">🔍</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5">🛒 3</span>
          </div>
        </div>

        {/* Stages */}
        <div className="relative mt-4 grid gap-3" style={{ height: compact ? "calc(100% - 110px)" : "calc(100% - 130px)" }}>
          <StageSwitch active={stage === 0}>
            <ProductGrid />
          </StageSwitch>
          <StageSwitch active={stage === 1}>
            <ProductDetail />
          </StageSwitch>
          <StageSwitch active={stage === 2}>
            <Cart />
          </StageSwitch>
          <StageSwitch active={stage === 3}>
            <Orders />
          </StageSwitch>
          <StageSwitch active={stage === 4}>
            <Admin />
          </StageSwitch>
        </div>

        {/* Bottom indicator */}
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                stage === i ? "w-6 bg-white" : "w-1 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function useStageCycle() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStage((s: number) => (s + 1) % 5), 3000);
    return () => clearInterval(id);
  }, []);
  return [stage, setStage] as const;
}

function StageSwitch({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.97,
        filter: active ? "blur(0px)" : "blur(12px)",
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 ${active ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {children}
    </motion.div>
  );
}

function ProductGrid() {
  return (
    <div className="grid h-full grid-cols-4 gap-3">
      {products.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="glass-soft flex flex-col rounded-xl p-3"
        >
          <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-4xl md:text-5xl">
            {p.img}
          </div>
          <div className="mt-3 flex-1">
            <div className="font-display text-sm font-semibold tracking-tight text-white">
              {p.name}
            </div>
            <div className="mt-1 text-[11px] font-medium text-[#D2D2D7]">{p.price}</div>
          </div>
          <button className="mt-2 rounded-md border border-white/10 bg-white/[0.04] py-1.5 text-[10px] font-medium text-white">
            Add to Cart
          </button>
        </motion.div>
      ))}
    </div>
  );
}

function ProductDetail() {
  return (
    <div className="grid h-full grid-cols-2 gap-4">
      <div className="glass-soft flex items-center justify-center rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
        <div className="text-7xl md:text-8xl">🥭</div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="glass-soft rounded-xl p-4">
          <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            Featured
          </div>
          <div className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
            Mango Pickle
          </div>
          <div className="mt-1 font-display text-lg font-medium text-[#D2D2D7]">
            ₹240
          </div>
        </div>
        <div className="glass-soft flex-1 rounded-xl p-4">
          <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            Description
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-[#D2D2D7]">
            Hand-picked Alphonso mangoes marinated in traditional spices and cold-pressed oil. Slow-aged in ceramic jars for 21 days.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Organic", "Handmade", "Vegan"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-medium text-[#D2D2D7]">
                {t}
              </span>
            ))}
          </div>
        </div>
        <button className="rounded-xl bg-white py-3 text-[11px] font-semibold text-black">
          Buy Now
        </button>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="glass-soft flex-1 overflow-hidden rounded-xl">
        <div className="border-b border-white/[0.06] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
          Your Cart · 3 items
        </div>
        {[
          { name: "Mango Pickle", qty: 2, price: "₹480" },
          { name: "Lemon Pickle", qty: 1, price: "₹180" },
          { name: "Mixed Pickle", qty: 1, price: "₹320" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center justify-between border-b border-white/[0.04] px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-white/[0.06]" />
              <div>
                <div className="text-[11px] font-medium text-white">{item.name}</div>
                <div className="text-[9px] text-[#86868B]">Qty {item.qty}</div>
              </div>
            </div>
            <div className="text-[11px] font-semibold text-white">{item.price}</div>
          </motion.div>
        ))}
        <div className="flex items-center justify-between px-3 py-3">
          <span className="text-[11px] font-medium text-[#86868B]">Total</span>
          <span className="font-display text-base font-semibold text-white">₹980</span>
        </div>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div className="glass-soft flex h-full flex-col rounded-xl p-4">
      <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
        Recent Orders
      </div>
      <div className="mt-3 flex-1 space-y-2 overflow-hidden">
        {[
          { id: "#P1247", name: "Mango Pickle", status: "Delivered", amt: "₹480" },
          { id: "#P1246", name: "Lemon Pickle", status: "Shipped", amt: "₹180" },
          { id: "#P1245", name: "Mixed Pickle", status: "Processing", amt: "₹320" },
          { id: "#P1244", name: "Chilli Pickle", status: "Delivered", amt: "₹220" },
        ].map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5"
          >
            <div>
              <div className="font-mono text-[10px] text-[#D2D2D7]">{o.id}</div>
              <div className="text-[11px] font-medium text-white">{o.name}</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] uppercase tracking-wider text-[#D2D2D7]">{o.status}</div>
              <div className="text-[11px] font-semibold text-white">{o.amt}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Admin() {
  return (
    <div className="grid h-full grid-cols-3 gap-3">
      <div className="glass-soft col-span-2 rounded-xl p-4">
        <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
          Inventory
        </div>
        <div className="mt-3 space-y-2">
          {[
            { name: "Mango Pickle", stock: 42, level: 70 },
            { name: "Lemon Pickle", stock: 28, level: 45 },
            { name: "Mixed Pickle", stock: 16, level: 25 },
            { name: "Chilli Pickle", stock: 51, level: 85 },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="space-y-1"
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-medium text-white">{p.name}</span>
                <span className="text-[#D2D2D7]">{p.stock} units</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${p.level}%` }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                  className="h-full bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="glass-soft rounded-xl p-3">
          <div className="text-[8px] uppercase tracking-[0.3em] text-[#86868B]">
            Today
          </div>
          <div className="mt-1 font-display text-xl font-semibold text-white">12</div>
          <div className="text-[9px] text-[#D2D2D7]">Orders</div>
        </div>
        <div className="glass-soft rounded-xl p-3">
          <div className="text-[8px] uppercase tracking-[0.3em] text-[#86868B]">
            Revenue
          </div>
          <div className="mt-1 font-display text-xl font-semibold text-white">₹4.8K</div>
          <div className="text-[9px] text-[#D2D2D7]">+18%</div>
        </div>
        <div className="glass-soft rounded-xl p-3">
          <div className="text-[8px] uppercase tracking-[0.3em] text-[#86868B]">
            Users
          </div>
          <div className="mt-1 font-display text-xl font-semibold text-white">247</div>
          <div className="text-[9px] text-[#D2D2D7]">Total</div>
        </div>
      </div>
    </div>
  );
}
