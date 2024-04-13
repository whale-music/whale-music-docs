# 日志

## 打印等级

| 配置                   | 描述     | 默认参数 |
| ---------------------- | -------- | -------- |
| logging.level.org.core | 打印等级 | debug    |
| logging.level.org.api  | 打印等级 | debug    |
| logging.level.org.oss  | 打印等级 | debug    |
| logging.level.org.web  | 打印等级 | debug    |

## 日志格式

| 配置                                            | 描述                       | 默认参数                                                     |
| ----------------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| logging.pattern.console                         | 打印日志格式               | %clr(%d{yyyy-MM-dd HH:mm:ss:SSS}){blue} ${PID} %clr([%thread]){magenta} %clr(%5p){green} %clr(%C.%M[%line]){cyan} %msg%n |
| logging.pattern.file                            | 保存日志格式               | %d{yyyy-MM-dd HH:mm:ss} ${PID} [%thread] %-5level %logger - %msg%n |
| logging.file.name                               | 日志文件名                 | logs/${spring.application.name}.log                          |
| logging.logback.rollingpolicy.file-name-pattern | 归档日志文件存储地址       | logs/%d{yyyy_MM_dd}/${spring.application.name}.out.log.%d{yyyy-MM-dd}.%i.gz |
| logging.logback.rollingpolicy.max-history       | 保存存档日志文件的最大天数 | 7                                                            |



## 日志保存

| 配置                                         | 描述                     | 默认参数 |
| -------------------------------------------- | ------------------------ | -------- |
| logging.logback.rollingpolicy.max-file-size  | 日志文件最大限制         | 5MB      |
| logging.logback.rollingpolicy.total-size-cap | 要保留的日志备份的总大小 | 200MB    |

# Spring boot配置

| 配置                                      | 描述                  | 默认参数                                                     |
| ----------------------------------------- | --------------------- | ------------------------------------------------------------ |
| spring.application.name                   | 应用名称              | whale                                                        |
| spring.threads.virtual.enabled            | 启用虚拟线程          | true                                                         |
| spring.autoconfigure.exclude              | 自动配置排除          | org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration |
| spring.output.ansi.enabled                | 控制台 ANSI 输出      | always                                                       |
| spring.servlet.multipart.enabled          | 启用Servlet大文件上传 | true                                                         |
| spring.servlet.multipart.max-file-size    | 最大文件上传大小      | 200MB                                                        |
| spring.servlet.multipart.max-request-size | 最大请求大小          | 200MB                                                        |

## 文档生成配置

| 配置                             | 描述                  | 默认参数     |
| -------------------------------- | --------------------- | ------------ |
| springdoc.api-docs.enabled       | 启用Spring文档功能    | true         |
| springdoc.api-docs.path          | Spring文档路径        | /v3/api-docs |
| springdoc.swagger-ui.path        | Swagger UI路径        | /docs        |
| springdoc.packages-to-scan       | Swagger 扫描包路径    | org.web      |
| springdoc.pre-loading-enabled    | 预加载开启            | true         |
| knife4j.enable                   | 启用Knife4j           | true         |
| knife4j.setting.language         | Knife4j语言设置       | zh_cn        |
| knife4j.setting.home-custom-path | Knife4j自定义主页路径 |              |
| knife4j.cors                     | Knife4j跨域配置       | true         |
| http-request.temp-path           | 上传缓存目录          | ./data/cache |



## 用户校验(JWT)

| 配置                           | 描述             | 默认参数                                                     |
| ------------------------------ | ---------------- | ------------------------------------------------------------ |
| jwt-config.seed-key            | JWT种子密钥      | ad419e9df4fe41ea1c20bee247a28dce6df8c7cd84c642qw3de5b37bf3e5ec5c |
| jwt-config.expire-time         | 校验token(1天)   | 86_400_000                                                   |
| jwt-config.refresh-expire-time | # 刷新token 30天 | 2_592_000_000                                                |



## 数据源配置

| 配置                                                    | 描述                                  | 默认参数                                    |
| ------------------------------------------------------- | ------------------------------------- | ------------------------------------------- |
| spring.datasource.driver-class-name                     | 数据库驱动类名                        | org.h2.Driver                               |
| spring.datasource.url                                   | 数据库URL                             | jdbc:h2:file:./data/db/db_data              |
| spring.datasource.username                              | 数据库用户名                          | root                                        |
| spring.datasource.password                              | 数据库密码                            | root                                        |
| spring.jpa.hibernate.ddl-auto                           | Hibernate DDL模式                     | update                                      |
| spring.jpa.properties.hibernate.format_sql              | Hibernate SQL格式化输出               | ${application.config.log}                   |
| spring.jpa.properties.hibernate.show_sql                | Hibernate SQL显示                     | ${application.config.log}                   |
| mybatis-plus.mapper-locations                           | MyBatis Plus Mapper XML位置           | classpath:mapper/*.xml                      |
| mybatis-plus.global-config.db-config.id-type            | MyBatis Plus 主键类型                 | auto                                        |
| mybatis-plus.global-config.db-config.table-underline    | MyBatis Plus 数据库表字段驼峰命名转换 | true                                        |
| mybatis-plus.configuration.map-underscore-to-camel-case | MyBatis Plus 下划线转驼峰             | true                                        |
| mybatis-plus.configuration.log-impl                     | MyBatis Plus SQL日志输出              | org.apache.ibatis.logging.stdout.StdOutImpl |

## 国际化配置

| 配置                                      | 描述                       | 默认参数      |
| ----------------------------------------- | -------------------------- | ------------- |
| spring.messages.encoding                  | 消息编码                   | UTF-8         |
| spring.messages.basename                  | i18资源存储地址            | i18n/messages |
| spring.messages.fallback-to-system-locale | 消息文件回退到系统区域设置 | true          |
| spring.messages.default-language          | 默认语言, `local`本地      | local         |



# 文件储存配置

| 配置                           | 描述                                           | 默认参数                                            |
| ------------------------------ | ---------------------------------------------- | --------------------------------------------------- |
| save-config.scan-filter.audio  | 扫描音频文件格式                               | mp3, wav, flac, aac, ogg, wma, m4a                  |
| save-config.scan-filter.pic    | 扫描图片文件格式                               | jpg, jpeg, png, gif, bmp, tiff, tif, webp, svg, raw |
| save-config.scan-filter.video  | 扫描视频文件格式                               | mp4, avi, mkv, mov, wmv, flv, webm, mpeg, rmvb      |
| save-config.save-mode          | 保存模式(Local, Alist)                         | Local                                               |
| save-config.object-save        | 保存对象地址(可以多个)                         | /music                                              |
| save-config.assign-object-save | 分配对象保存地址                               | 0                                                   |
| save-config.img-save           | 图片保存地址(可以多个)                         | /img                                                |
| save-config.assign-img-save    | 分配图片保存地址                               | 0                                                   |
| save-config.mv-save            | 视频保存地址(可以多个)                         | /mv                                                 |
| save-config.assign-mv-save     | 分配视频保存地址                               | 0                                                   |
| save-config.host               | 请求对象地址(Local是本地文件地址，alist是url)  | ./data/storage                                      |
| save-config.access-key         | 存储账户(在local模式下无用)                    | admin                                               |
| save-config.secret-key         | 存储密码(在local模式下无用)                    | LLq9quPO                                            |
| file-type.suffix               | 上传文件类型后缀，如果上传其他类型则会抛出错误 | mp3, ogg,flac                                       |



# 默认返回图片

可以使用网络地址，或者使用`classpath`下资源

| 配置                             | 描述                            | 默认参数             |
| -------------------------------- | ------------------------------- | -------------------- |
| default-info.pic.music-pic       | 如果没有图片，则返回默认该图片. | /assets/default.png  |
| default-info.pic.play-list-pic   | 播放列表图片                    | /assets/playlist.png |
| default-info.pic.album-pic       | 专辑图片                        | /assets/album.png    |
| default-info.pic.artist-pic      | 艺术家图片                      | /assets/artist.png   |
| default-info.pic.user-avatar-pic | 用户头像                        | /assets/user.png     |



# 保存音乐配置

| 配置                       | 描述                                  | 默认参数                          |
| -------------------------- | ------------------------------------- | --------------------------------- |
| default-info.name.artist   | 保存歌手繁简转化`default`不做任何处理 | default                           |
| default-info.name.music    | 保存歌曲繁简转化`default`不做任何处理 | default                           |
| default-info.name.album    | 保存专辑繁简转化`default`不做任何处理 | default                           |
| upload.music-name-template | 音乐命名模板                          | {music}-{album}-[{artist}]-{rate} |



# 应用启动配置

| 配置                                    | 描述                       | 例子                |
| --------------------------------------- | -------------------------- | ------------------- |
| application.config.plugin               | 插件, 默认关闭             | false               |
| application.config.log                  | 日志，默认关闭             | false               |
| application.enable.admin-application    | admub应用，默认启用        | true                |
| application.enable.n-music-application  | NMusic，默认关闭           | false               |
| application.enable.subsonic-application | Subsonic，默认关闭         | false               |
| application.enable.webdav-application   | WebDAV，默认关闭           | false               |
| cache.path                              | 缓存路径. 持久化缓存的路径 | ./data/cache/record |
| subsonic.resource.return-plan           | Subsonic资源返回策略       | first               |
| webdav.resource.return-plan             | WebDAV资源返回策略         | first               |



# 跨域配置

| 配置                   | 描述                 | 例子                                          |
| ---------------------- | -------------------- | --------------------------------------------- |
| cross.admin.enable     | admin跨域是否启用    | false                                         |
| cross.admin.domains    | admin允许跨域域名    | http://localhost:8848/,http://localhost:8081/ |
| cross.subsonic.enable  | Subsonic跨域是否启用 | false                                         |
| cross.subsonic.domains | Subsonic允许跨域域名 | http://localhost:8080                         |
| cross.webdav.enable    | WebDAV跨域是否启用   | false                                         |
| cross.webdav.domains   | WebDAV允许跨域域名   | http://localhost:8081                         |
| cross.nmusic.enable    | N音乐跨域是否启用    | false                                         |
| cross.nmusic.domains   | Nmusic允许跨域域名   | http://localhost:8081                         |

