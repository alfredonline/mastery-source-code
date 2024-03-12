const Title = ({ text, emoji }: { text: string; emoji?: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{text}
        {emoji && <span className="ml-2">{emoji}</span>}
      </h1>
      <br />
      <br />
    </div>
  );
};

export default Title;
