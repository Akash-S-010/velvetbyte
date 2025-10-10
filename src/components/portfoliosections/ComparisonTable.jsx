import React from 'react';

// --- Icon Components (Simple Text Fallback for Check/Cross) ---
// Using Unicode characters for a clean, reliable look without needing extra libraries.
const CheckIcon = () => (
    // Changed color to a vibrant orange
    <span style={{ color: '#FFA500', fontSize: '18px', fontWeight: 'bold' }}>&#10003;</span> // Orange checkmark
);
const CrossIcon = () => (
    // Changed color to a vibrant orange
    <span style={{ color: '#FFA500', fontSize: '18px', fontWeight: 'bold' }}>&#10006;</span> // Orange cross
);

// --- Styles as JavaScript Objects ---
const styles = {
    // Main Container
    tableContainer: {
        padding: '60px 5%',
        backgroundColor: '#FFFFFF', // White background for the page area
        fontFamily: 'Arial, sans-serif',
    },
    // The Table Element Itself
    table: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        borderCollapse: 'collapse', // Removes double borders
    },
    // Header Row and Top Cells
    headerCell: {
        backgroundColor: '#FFFFFF',
        padding: '30px 15px',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottom: '1px solid #EAEAEA',
        color: '#333333',
    },
    // The first column cell (Feature Name)
    featureCell: {
        backgroundColor: '#FFFFFF',
        padding: '20px 15px',
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign: 'left',
        borderBottom: '1px solid #EAEAEA',
        color: '#333333',
    },
    // Row for the Cost feature (Bold Text)
    costCell: {
        backgroundColor: '#FFFFFF',
        padding: '20px 15px',
        fontSize: '16px',
        fontWeight: 'bold', // Cost text is bold
        textAlign: 'left',
        color: '#333333',
    },
    // Data Cells (Check/Cross/Text)
    dataCell: {
        backgroundColor: '#F7F4F0', // Very light tan/beige color for the columns
        padding: '20px 15px',
        fontSize: '16px',
        textAlign: 'center',
        borderBottom: '1px solid #EAEAEA',
        color: '#333333',
        verticalAlign: 'middle',
    },
    // Special Text for dependent features (e.g., Depends on...)
    dependentText: {
        fontSize: '14px',
        color: '#666666',
        lineHeight: '1.4',
    }
};

// --- Table Row Component ---
const TableRow = ({ feature, agency, freelancers, diy, isCost = false }) => {
    // Determine cell style based on whether it's the cost row
    const cellStyle = isCost ? styles.costCell : styles.dataCell;
    const featureStyle = isCost ? styles.costCell : styles.featureCell;

    // Helper function to render cell content (icon or text)
    const renderContent = (content) => {
        if (content === 'check') return <CheckIcon />;
        if (content === 'cross') return <CrossIcon />;
        return <span style={styles.dependentText}>{content}</span>;
    };

    return (
        <tr>
            <td style={featureStyle}>{feature}</td>
            <td style={cellStyle}>{renderContent(agency)}</td>
            <td style={cellStyle}>{renderContent(freelancers)}</td>
            <td style={cellStyle}>{renderContent(diy)}</td>
        </tr>
    );
};


// --- Main Comparison Table Component ---
const ComparisonTable = () => {
    return (
        <div style={styles.tableContainer}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={{...styles.headerCell, textAlign: 'left', width: '30%'}}></th>
                        <th style={{...styles.headerCell, width: '23.3%'}}>Professional Agency</th>
                        <th style={{...styles.headerCell, width: '23.3%'}}>Freelancers</th>
                        <th style={{...styles.headerCell, width: '23.3%'}}>DIY Website Builder</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Feature Rows */}
                    <TableRow feature="Fully Custom Design" agency="check" freelancers="check" diy="cross" />
                    <TableRow feature="SEO Optimised" agency="check" freelancers="Depends on the Individual" diy="Depends On Your Skills" />
                    <TableRow feature="Ongoing Support" agency="check" freelancers="cross" diy="cross" />
                    <TableRow feature="Ownership of Design" agency="check" freelancers="check" diy="cross" />
                    <TableRow feature="Short Turnaround" agency="cross" freelancers="Depends on Availability" diy="check" />
                    <TableRow feature="Mobile Optimised" agency="check" freelancers="check" diy="cross" />
                    <TableRow feature="Highly Credible" agency="check" freelancers="Depends on the Individual" diy="check" />
                    
                    {/* Cost Row (Bold and uses different text) */}
                    <TableRow 
                        feature="Cost" 
                        agency="£10,000+" 
                        freelancers="£500 to £5,000+" 
                        diy="£9 - £259 per month"
                        isCost={true}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;