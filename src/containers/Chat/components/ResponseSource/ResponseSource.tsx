import ResponseSourceContext from "../../../../contexts/ResponseSourceContext";
import { useContext } from "react";
import ResizableSidebar from "../../../../components/RightSidebar/ResizableSidebar";
import ResponseSourceItem from "./ResponseSourceItem";

function ResponseSource() {
  const context = useContext(ResponseSourceContext);
  const { setSource } = useContext(ResponseSourceContext);

  return (
    <ResizableSidebar
      isOpen={!!context.source?.length}
      title="Message context"
      onClose={() => setSource([])}
    >
      {context.source?.map((item, index) => (
        <ResponseSourceItem key={index} item={item} />
      ))}
    </ResizableSidebar>
  );
}

export default ResponseSource;
