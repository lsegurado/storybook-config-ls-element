import { renderFunctionalComponent, h, AdoptedStyle } from '@lsegurado/ls-element';
import { RenderResult } from '@lsegurado/ls-element/dist/LSElement/types';
import { themes } from './themes';

type WrapperFunction<T> = (props: T & { theme: 'dark' | 'light' }, ...children: any) => RenderResult;

export function bind<T>(Story: WrapperFunction<T>, attrs: T) {
  const auxFunction = (attrs, { globals }) => {
    const { theme } = globals;
    return renderFunctionalComponent(
      <div id="root-storybook">
        <AdoptedStyle parentRef={document} id="root-storybook-style">{`html,
          body,
          #root-storybook,
          #root {
            height: 100%;
            margin: 0;
            color: ${themes[globals.theme].textColor};
            background-color: ${themes[globals.theme].appBg};
            box-sizing: border-box;
          }
          #root-storybook {
            padding: 8px;
          }
          `}</AdoptedStyle>
        {Story({ ...attrs, theme }, {})}
      </div>
    );
  };
  const templateBind = auxFunction.bind({}) as { args: T };
  templateBind.args = attrs;
  return templateBind;
}