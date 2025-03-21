function Badge({ children, id }: { children: React.ReactNode; id: number }) {
    return (
      <div
        key={id}
        className="relative bg-primary text-primary-foreground font-semibold px-[0.75rem] py-[0.1rem] italic text-sm w-fit hover:cursor-pointer"
      >
        {children}
      </div>
    );
  }
  
  export default Badge;
  