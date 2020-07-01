// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client:{
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        mime: {
            'text/x-typescript': ['ts','tsx']
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/dcm4chee-arc-ui2'),
            reports: [ 'html', 'lcovonly', 'text-summary' ],
            fixWebpackSourcePaths: true
        },
        files:[
            "src/app/constants/dcm4che-dict-names.js",
            "src/app/constants/dcm4chee-arc-dict-names.js",
            "src/app/constants/dcm4che-dict-cuids.js",
            "src/app/constants/dcm4che-dict-tsuids.js",
            "src/app/constants/elscint-dict-names.js",
            "src/app/constants/acuson-1.2.840.113680.1.0-7ffe.js",
            "src/app/constants/acuson-1.2.840.113680.1.0-7f10.js",
            "src/app/constants/acuson.js",
            "src/app/constants/acuson-1.2.840.113680.1.0-0910.js",
            "src/app/constants/agfa-adc-compact-dict-names.js",
            "src/app/constants/agfa-adc-nx-dict-names.js",
            "src/app/constants/agfa-ag-hpstate-dict-names.js",
            "src/app/constants/agfa-dict-names.js",
            "src/app/constants/agfa-displayable-images-dict-names.js",
            "src/app/constants/agfa-kosd-1.0-dict-names.js",
            "src/app/constants/agfa-pacs-archive-mirroring-1.0-dict-names.js",
            "src/app/constants/agfa-xeroverse-dict-names.js",
            "src/app/constants/agility-overlay-dict-names.js",
            "src/app/constants/agility-runtime-dict-names.js",
            "src/app/constants/mitra-linked-attributes-1.0-dict-names.js",
            "src/app/constants/mitra-markup-1.0-dict-names.js",
            "src/app/constants/mitra-object-attributes-1.0-dict-names.js",
            "src/app/constants/mitra-object-document-1.0-dict-names.js",
            "src/app/constants/mitra-object-utf8-attributes-1.0-dict-names.js",
            "src/app/constants/mitra-presentation-1.0-dict-names.js",
            "src/app/constants/CARDIO-D.R.-1.0.js",
            "src/app/constants/DIDI-TO-PCR-1.1.js",
            "src/app/constants/PHILIPS-IMAGING-DD-001.js",
            "src/app/constants/PHILIPS-MR.js",
            "src/app/constants/PHILIPS-MR-IMAGING-DD-001.js",
            "src/app/constants/PHILIPS-MR-R5.5-PART.js",
            "src/app/constants/PHILIPS-MR-R5.6-PART.js",
            "src/app/constants/PHILIPS-MR-SPECTRO-1.js",
            "src/app/constants/PHILIPS-MR-LAST.js",
            "src/app/constants/PHILIPS-MR-PART.js",
            "src/app/constants/PHILIPS-MR-PART-12.js",
            "src/app/constants/PHILIPS-MR-PART-6.js",
            "src/app/constants/PHILIPS-MR-PART-7.js",
            "src/app/constants/PHILIPS-NM--Private.js",
            "src/app/constants/PHILIPS-XCT--Private.js",
            "src/app/constants/PHILIPS-MR-1.js",
            "src/app/constants/PMS-THORA-5.1.js",
            "src/app/constants/Philips-EV-Imaging-DD-022.js",
            "src/app/constants/Philips-Imaging-DD-001.js",
            "src/app/constants/Philips-Imaging-DD-002.js",
            "src/app/constants/Philips-Imaging-DD-065.js",
            "src/app/constants/Philips-Imaging-DD-067.js",
            "src/app/constants/Philips-Imaging-DD-070.js",
            "src/app/constants/Philips-Imaging-DD-073.js",
            "src/app/constants/Philips-Imaging-DD-124.js",
            "src/app/constants/Philips-Imaging-DD-129.js",
            "src/app/constants/Philips-MR-Imaging-DD-001.js",
            "src/app/constants/Philips-MR-Imaging-DD-002.js",
            "src/app/constants/Philips-MR-Imaging-DD-003.js",
            "src/app/constants/Philips-MR-Imaging-DD-004.js",
            "src/app/constants/Philips-MR-Imaging-DD-005.js",
            "src/app/constants/Philips-MR-Imaging-DD-006.js",
            "src/app/constants/Philips-NM-Private-Group.js",
            "src/app/constants/Philips-PET-Private-Group.js",
            "src/app/constants/Philips-RAD-Imaging-DD-001.js",
            "src/app/constants/Philips-RAD-Imaging-DD-097.js",
            "src/app/constants/Philips-US-Imaging-DD-017.js",
            "src/app/constants/Philips-US-Imaging-DD-021.js",
            "src/app/constants/Philips-US-Imaging-DD-023.js",
            "src/app/constants/Philips-US-Imaging-DD-033.js",
            "src/app/constants/Philips-US-Imaging-DD-034.js",
            "src/app/constants/Philips-US-Imaging-DD-035.js",
            "src/app/constants/Philips-US-Imaging-DD-036.js",
            "src/app/constants/Philips-US-Imaging-DD-037.js",
            "src/app/constants/Philips-US-Imaging-DD-038.js",
            "src/app/constants/Philips-US-Imaging-DD-039.js",
            "src/app/constants/Philips-US-Imaging-DD-040.js",
            "src/app/constants/Philips-US-Imaging-DD-041.js",
            "src/app/constants/Philips-US-Imaging-DD-042.js",
            "src/app/constants/Philips-US-Imaging-DD-043.js",
            "src/app/constants/Philips-US-Imaging-DD-045.js",
            "src/app/constants/Philips-US-Imaging-DD-046.js",
            "src/app/constants/Philips-US-Imaging-DD-048.js",
            "src/app/constants/Philips-US-Imaging-DD-065.js",
            "src/app/constants/Philips-US-Imaging-DD-066.js",
            "src/app/constants/Philips-US-Imaging-DD-109.js",
            "src/app/constants/Philips-US-Imaging-DD-113.js",
            "src/app/constants/Philips-X-ray-Imaging-DD-001.js",
            "src/app/constants/SPI-Release-1.js",
            "src/app/constants/SPI-P-Release-1.js",
            "src/app/constants/SPI-P-Release-1-1.js",
            "src/app/constants/SPI-P-Release-1-2.js",
            "src/app/constants/SPI-P-Release-1-3.js",
            "src/app/constants/SPI-P-Release-2-1.js",
            "src/app/constants/SPI-P-CTBE-Release-1.js",
            "src/app/constants/SPI-P-CTBE-Private-Release-1.js",
            "src/app/constants/SPI-P-GV-CT-Release-1.js",
            "src/app/constants/SPI-P-PCR-Release-2.js",
            "src/app/constants/SPI-P-Private-CWS-Release-1.js",
            "src/app/constants/SPI-P-Private-DCI-Release-1.js",
            "src/app/constants/SPI-P-Private-DiDi-Release-1.js",
            "src/app/constants/SPI-P-Private_CDS-Release-1.js",
            "src/app/constants/SPI-P-Private_ICS-Release-1.js",
            "src/app/constants/SPI-P-Private_ICS-Release-1-1.js",
            "src/app/constants/SPI-P-Private_ICS-Release-1-2.js",
            "src/app/constants/SPI-P-Private_ICS-Release-1-3.js",
            "src/app/constants/SPI-P-Private_ICS-Release-1-4.js",
            "src/app/constants/SPI-P-Private_ICS-Release-1-5.js",
            "src/app/constants/SPI-P-XSB-DCI-Release-1.js",
            "src/app/constants/SPI-P-XSB-VISUB-Release-1.js"
        ],
        angularCli: {
            environment: 'dev'
        },
        reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'coverage-istanbul']
            : ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
