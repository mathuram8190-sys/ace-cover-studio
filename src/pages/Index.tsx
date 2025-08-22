import FacebookCover from "@/components/FacebookCover";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-foreground">Facebook Cover Design</h1>
          <p className="text-muted-foreground">RN Reliable Stay - Following 60-30-10 Color Rule</p>
        </div>
        <div className="bg-card rounded-lg p-4 shadow-soft">
          <FacebookCover />
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>✓ 60-30-10 Color Rule Applied</p>
          <p>✓ Correct AC Icon (Snowflake)</p>
          <p>✓ WhatsApp Icon Added</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
