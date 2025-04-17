
export const Features = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="whisper-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Whisper?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A minimalist messaging experience designed for simplicity and security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="mb-6">
            <img src="/image-uploads/image.png" alt="Group Chat" className="w-full h-auto rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
            <p className="text-muted-foreground">
              Create groups for friends, family, or teammates and stay connected with everyone at once.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="mb-6">
            <img src="/image-uploads/image1.png" alt="Media Sharing" className="w-full h-auto rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Media Sharing</h3>
            <p className="text-muted-foreground">
              Easily share photos, videos, and documents with your contacts without compression.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="mb-6">
              <img src="/image-uploads/image2.png" alt="Secure Chat" className="w-full h-auto rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
            <p className="text-muted-foreground">
              Your messages are secured with end-to-end encryption, ensuring only you and your recipient can read them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
