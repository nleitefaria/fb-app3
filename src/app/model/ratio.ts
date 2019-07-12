import ProfitabilityIndicatorRatios from '../model/profitability-indicator-ratios';
import DebtRatios from '../model/debt-ratios';
import LiquidityMeasurementRatios from '../model/liquidity-measurement-ratios';
import OperatingPerformanceRatios from '../model/operating-performance-ratios';
import CashFlowIndicatorRatios from '../model/cash-flow-indicator-ratios';
import InvestmentValuationRatios from '../model/investment-valuation-ratios';      

export default class Ratio 
{
	date: string;
    liquidityMeasurementRatios: LiquidityMeasurementRatios;
    profitabilityIndicatorRatios: ProfitabilityIndicatorRatios;
    debtRatios: DebtRatios;
    operatingPerformanceRatios: OperatingPerformanceRatios;
    cashFlowIndicatorRatios: CashFlowIndicatorRatios;
    investmentValuationRatios: InvestmentValuationRatios;           
}