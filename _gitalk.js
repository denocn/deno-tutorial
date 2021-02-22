const Gitalk = (props) => {
    React.useEffect(() => {
        // https://pegasaas.com/how-to-defer-render-blocking-css/
        // @ts-ignore
        const css = document.getElementById('gitalk-css');
        css.rel = 'stylesheet';
    });
    React.useEffect(() => {
        // @ts-ignore
        const container = document.getElementById('gitalk-container');
        ReactDOM.unmountComponentAtNode(container);
        container.innerHTML = '';
        new window.Gitalk(props).render(container);
    }, [props.id]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "gitalk-container" }),
        React.createElement("link", { id: "gitalk-css", rel: "preload", href: "https://cdn.pagic.org/gitalk@1.6.2/dist/gitalk.css", as: "style" }),
        React.createElement("script", { defer: true, src: "https://cdn.pagic.org/gitalk@1.6.2/dist/gitalk.min.js" })));
};
export default Gitalk;
