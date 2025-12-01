import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from "unplugin-icons/vite";
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(), 
        // 自动导入图标组件 (可选，通常在 template 里直接用组件即可，不需要这个)
        // IconsResolver({
        //   prefix: 'Icon',
        // })
        ],
        dts: 'src/auto-imports.d.ts', // 生成类型声明文件路径
    }),
    Components({
      resolvers: [ElementPlusResolver(), 
        // 关键配置：自动导入图标组件
        IconsResolver({
          // 启用 @iconify-json/ep (Element Plus 图标集)
          enabledCollections: ['ep'], 
          // 别名配置 (可选，默认是 i)
          // 如果设为 'icon'，则使用 <icon-ep-edit />
          // 如果不设，则使用 <i-ep-edit />
        })],
        dts: 'src/components.d.ts', // 生成类型声明文件路径
    }),
    // 3. 配置 Icons (图标加载器)
    Icons({
      autoInstall: true, // 如果检测到未安装的图标集，自动尝试安装
    }),
  ],
})
