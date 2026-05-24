"use client";

import React, { useState } from "react";

import {
  MdContacts,
  MdEmail,
  MdPhone,
  MdClose,
  MdContentCopy,
  MdCheck,
  MdMarkEmailRead,
} from "react-icons/md";

const ContactItem = ({ icon: Icon, label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/30 transition-all duration-200 group">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-400/10 border border-sky-400/20">
          <Icon className="text-sky-400 text-lg" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
            {label}
          </p>
          <p className="text-sm text-slate-100 font-medium mt-0.5">{value}</p>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-sky-400/10 text-slate-400 hover:text-sky-400 transition-all duration-200"
        aria-label={`Copy ${label}`}
      >
        {copied ? (
          <MdCheck className="text-sky-400 text-base" />
        ) : (
          <MdContentCopy className="text-base" />
        )}
      </button>
    </div>
  );
};

const EmailModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide
                  text-sky-300 border border-sky-400/40
                  hover:bg-sky-400/10 hover:border-sky-400 hover:text-sky-200
                  active:scale-95 transition-all duration-200 overflow-hidden
                  before:absolute before:inset-0 before:rounded-full before:opacity-0
                  before:bg-gradient-to-r before:from-sky-400/0 before:via-sky-400/5 before:to-sky-400/0
                  hover:before:opacity-100 before:transition-opacity before:duration-300"
      >
        Email
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Dialog */}
          <div className="relative w-full max-w-sm rounded-2xl bg-[#0d1f3c] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Top accent line */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-sky-400/60 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20">
                  <MdMarkEmailRead className="text-sky-400 text-xl" />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base leading-tight">
                    Email Me:
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all duration-150"
                aria-label="Close modal"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/8" />

            {/* Body */}
            <div className="px-5 py-4 flex flex-col gap-3">
              <ContactItem
                icon={MdEmail}
                label="Email"
                value="faruqueomar740@gmail.com"
              />
            </div>

            {/* Footer */}
            <div className="px-5 pb-5 pt-1">
              <button
                onClick={() => setOpen(false)}
                className="w-full py-2.5 rounded-xl bg-sky-500/20 border border-sky-400/30
                          text-sky-300 font-semibold text-sm tracking-wide
                          hover:bg-sky-500/30 hover:border-sky-400/50 hover:text-sky-200
                          active:scale-[0.98] transition-all duration-200"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailModal;
