
export function WelcomeSection() {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Welcome</h2>
        <p className="max-w-2xl text-muted-foreground">
          This is the page content area rendered by the page. The layout wraps
          it and composes the Hero and other sections.
        </p>
      </div>
    </section>
  );
}
