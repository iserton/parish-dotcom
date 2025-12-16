export const CustomParagraph = ({ children }) => (
    <p className="text-sm md:text-base my-2">{children}</p>
);
    
export const CustomHeading1 = ({ children }) => (
    <h1 className="text-xl font-header2 my-6">{children}</h1>
);

export const CustomLink = ({ href, children }) => (
    <a href={href} target="_blank" className="text-blue-600 underline">{children}</a>
);