const TwigCompilator = new (require('@alldigitalads/nodejs_modules-twig-frontend'));

TwigCompilator
    .configServerProxy(require('./proxy.config'))
    .setRenderList('./_render_list.js')
    .setTranslateMessages('./_translate_messages.js')
    .setRouteRules('./_route_rules.js')
    .setDynamicFixtures('./_dynamic_fixtures.js')
    .setRecompileDelay(1000)
    .createSymfonyManifest(true)
;

module.exports = (env, options) => {
    process.env.NODE_ENV = options.mode;
    return TwigCompilator.getWebpackConfig();
};
