
function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Luis Alejandro Quiroz Polanco
        </p>
      </div>
    </footer>
  )
}

export default Footer
