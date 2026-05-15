const Track = require('../models/track');

// const schemas = require("../schemas");

const autoCleaner = async () => {

    try {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

        const result = await Track.deleteMany({
        createdAt: { $lt: twoMonthsAgo }
        });

        console.log(`[CRON] Очищення завершено. Видалено треків: ${result.deletedCount}`);
    } catch (error) {
        
        console.error('[CRON] Помилка під час видалення треків:', error);
    }

};

module.exports = autoCleaner;